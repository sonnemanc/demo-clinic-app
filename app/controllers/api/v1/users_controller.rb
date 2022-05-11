class Api::V1::UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]

    def index
      render json: User.all
    end

    def show
      user = User.find_by(id: session[:user_id])
  
      if user 
          render json: user, status: :ok
      else
          render json: "No current user", status: :unauthorized
      end
  end

    def create
      #  render json: User.create(user_params)
      render json: User.create!(user_params), status: :created
    end

    def update
      user = User.find(params[:id])
      user.update!(user_params)
      render json: user, status: :ok
    end

    def destroy
      User.find(params[:username]).delete
      head :no_content

    end

    private

    def set_user
      @user = User.find(params[:id])
    end

    def user_params
        params.permit(:email, :lastname, :firstname, :username, :password)

    end


end
