require 'test_helper'

class GameSystemControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get game_system_index_url
    assert_response :success
  end

end
