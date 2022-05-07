class Api::V1::UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]

    def index
        render json: User.all
    end

    def show
        render json: @user
    end

    def create
      @user = User.create(user_params)

      if @user.save
        render json @user, status: :created, location: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    def update
        @user.update(user_params)
    end

    def destroy
        @user.destroy
    end

    private

#this is where I define @user for show, update, and destroy
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
        params.permit(:email, :last_name, :first_name, :username, :password)
    end


end
