Rails.application.routes.draw do
  root 'game_system#index'

  get '/' => 'game_system#index'
  get 'info' => 'game_system#info'

  post 'start_game' => 'game_system#start_game'
  post 'new_game' => 'game_system#new_game'
  post 'end_game' => 'game_system#end_game'
  post 'shuffle_slots' => 'game_system#shuffle_slots'
  post 'bet_lower' => 'game_system#bet_lower'
  post 'bet_higher' => 'game_system#bet_higher'

  resources :messages, only: [:index]

  mount ActionCable.server => '/cable'

end
