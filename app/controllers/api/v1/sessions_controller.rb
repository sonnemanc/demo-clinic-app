class Api::V1::SessionsController < ApplicationController

 
    skip_before_action :authorized_user, only: [:login, :signup]

    def login
        user = User.find_by!(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok 
        else 
            render json: {error: "Invalid Username and/or Password"}, status: :unauthorized
        end 
    end 
    def destroy
        session.delete :user_id
        head :no_content
        
    end 
    def get_current_user
        if logged_in?
            render json: UserSerializer.new(current_user)
        else
            render json: {
                error: "Not logged in"
            }
        end
    end

    def destroy
        session.clear
        render json: {
            notice: 'successfully logged out'
        }, status: :ok
    end

end
