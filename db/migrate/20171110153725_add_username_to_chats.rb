class AddUsernameToChats < ActiveRecord::Migration[5.1]
  def change
  	add_column :chats, :username, :string
  end
end
