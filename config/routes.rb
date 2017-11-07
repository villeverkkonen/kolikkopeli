Rails.application.routes.draw do
  root 'game_system#index'

  get '/' => 'game_system#index'
  get 'info' => 'game_system#info'

  post 'start_game' => 'game_system#start_game'
  post 'new_game' => 'game_system#new_game'
  post 'end_game' => 'game_system#end_game'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
