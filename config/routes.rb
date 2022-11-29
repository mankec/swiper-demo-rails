Rails.application.routes.draw do
  root to: "pages/25", controller: "pages", action: :show
  get "pages/:id", controller: "pages", action: :show
  get "append/:id", controller: "pages", action: :append

end
