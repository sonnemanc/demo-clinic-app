class Api::V1::UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]

    def index
        render json: User.all
    end

    def show
        render json: @user
    end

    def create
       render json: User.create(user_params)
    end

    def update

    end

    def destroy

    end

    private

    def set_user
      @user = User.find(params[:id])
    end

    def user_params
        params.permit(:email, :lastname, :firstname, :username, :password)

    end


end
