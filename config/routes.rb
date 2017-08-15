Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'

  get 'home', to: 'marknoce#homepage'
  get 'about', to: 'marknoce#about'
  get 'appearances', to: 'marknoce#appearances'
  get 'blog', to: 'marknoce#blog'
  get 'books', to: 'marknoce#books'
  get 'contact', to: 'marknoce#contact'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
