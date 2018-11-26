class ChatsController < ApplicationController

  before_action :load_users, only: [:index]
  before_action :load_user, only: [:show, :update]

  def index
    render json: @users, serializer: ChatsSerializer
  end

  def show

  end

  def update

  end

  private

  def load_users
    @users = User.all
  end

  def load_user
    @user = User.find(params[:id])
  end

end
