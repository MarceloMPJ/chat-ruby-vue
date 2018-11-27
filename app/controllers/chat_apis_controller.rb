class ChatApisController < ApplicationController

  before_action :load_users, only: [:index]
  before_action :load_user, only: [:show, :update]

  def index
    render json: @users, each_serializer: ChatsSerializer, current_user: current_user
  end

  def show
  end

  def update
  end

  private

  def load_users
    @users = User.where('id != ?', current_user.id)
  end

  def load_user
    @user = User.find(params[:id])
  end

end
