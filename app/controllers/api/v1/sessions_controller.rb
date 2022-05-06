class Api::V1::SessionsController < ApplicationController

    def create

    end

    def get_current_user

    end

    def destroy
        session.clear
        render json: {
            notice: 'successfully logged out'
        }, status: :ok
    end

end
