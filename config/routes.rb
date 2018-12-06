Rails.application.routes.draw do

  resources :chats
  resources :chat_apis do
    collection do
      get :user_info
    end
    member do
      post :new_message
    end
  end

end
