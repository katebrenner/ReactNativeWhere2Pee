Rails.application.routes.draw do
  scope :api do
    resources :bathrooms
  end
end
