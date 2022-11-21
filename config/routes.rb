Rails.application.routes.draw do
  root to: "pages#index"
  get "pages/:id", controller: "pages", action: :show
  get "append", controller: "pages", action: :append
  #get "page", controller: "pages"
  #post "page", controller: "pages"
end
