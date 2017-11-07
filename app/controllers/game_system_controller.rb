class GameSystemController < ApplicationController

  respond_to :html, :json, :js

  def index
    @all_high_scores = HighScore.all

    @AAA = 8
    @BBB = 15
    @CCC = 20
    @ABC = 10
    @A9 = 150
    @B9 = 350
    @C9 = 500

    @bet_1 = 0
    @bet_2 = 0.2
    @bet_3 = 0.45
    @bet_4 = 0.7
    @bet_5 = 1
  end

  def start_game
    @user = User.find_by(username: params[:username])

    if @user.nil?
      @user = User.new
      @user.username = params[:username]
      @user.game_money = 20
      @user.save
    else
      @user.game_money = 20
      @user.save
    end

    respond_to do |format|
      format.js
    end

  end

  def new_game
  	respond_to do |format|
      format.js
    end
  end

  def end_game
    @user = User.find_by(username: params[:username])
    @username = params[:username]
    @game_money = params[:game_money].to_i || 0

    # Money has run out, don't bother to create HighScore and delete it immediately
    if @game_money > 0
      @high_score = HighScore.new
      @high_score.username = @user.username
      @high_score.game_score = @game_money
      @high_score.save
    end

    # Only 5 High Scores allowed at a time, delete worst if over 5
    if HighScore.any? && HighScore.all.size > 5
      HighScore.all.order("game_score DESC").last.destroy
    end

    # all_high_scores for end_game.js.erb to update high score table
    @all_high_scores = HighScore.all

    # Destroy user, not needed anymore
    @user.destroy

    respond_to do |format|
      format.js
    end
  end

  def info
    respond_modal_with nil
  end

end
