Rails.application.routes.draw do
  resources :pages, only: [:index, :show]
  get "page", controller: "pages"
  post "page", controller: "pages"
end
