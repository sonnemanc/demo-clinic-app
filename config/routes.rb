Rails.application.routes.draw do

  post "/api/v1/login", to: "api/v1/sessions#create"
  get "/api/v1/get_current_user", to: "api/v1/sessions#get_current_user"
  delete "/api/v1/logout", to: "api/v1/sessions#destroy"
  get '/me', to: "users#show"
# can i push from my branch?

  namespace :api do
    namespace :v1 do
      resources :visits
      resources :providers
      resources :users
    end
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
