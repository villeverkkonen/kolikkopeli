class AddUsernamoToJackpots < ActiveRecord::Migration[5.1]
  def change
  	add_column :jackpots, :username, :string
  end
end
