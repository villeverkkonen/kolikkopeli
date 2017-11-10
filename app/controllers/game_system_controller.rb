class GameSystemController < ApplicationController

  before_action :set_slots, :set_winning_prices

  respond_to :html, :json, :js

  def index
  end

  # This happens every spin
  def shuffle_slots
    # By default game_over is false
    @game_over = false

    @user = User.find_by(username: params[:username])

    # If someone changed username through console do nothing but alert
    if !@user.nil?

      @bet = @user.current_bet

      shuffle(@slots)

      upper_slots_array = shuffle_action(@slots)
      middle_slots_array = shuffle_action(@slots)
      bottom_slots_array = shuffle_action(@slots)

      # Lower player's money by the amount of the bet
      lower_game_money_amount(@user, @bet)

      # Add possible winning money to player's money
      check_winning_price(upper_slots_array, middle_slots_array, bottom_slots_array)

      @game_money_amount = @user.game_money

      if @game_money_amount < @bet
        @bet = @game_money_amount
        @user.current_bet = @bet
        @user.save
      end

      # If money is over, game is over
      # Else shuffle slots and append them to the view
      if @game_money_amount == 0
        @game_over = true
        end_game
      else

        @upper_slots = append_slots_to_string(upper_slots_array)
        @middle_slots = append_slots_to_string(middle_slots_array)
        @bottom_slots = append_slots_to_string(bottom_slots_array)

      end
    else
      @user_not_found = true
    end

    respond_to do |format|
      format.js
    end
  end

  def check_winning_price(upper_slots, middle_slots, bottom_slots)
    @jackpot = false

    if (upper_slots[0] == "A" || upper_slots[0] == "#") &&
       (upper_slots[1] == "A" || upper_slots[0] == "#") &&
       (upper_slots[2] == "A" || upper_slots[0] == "#") &&
       (middle_slots[0] == "A" || middle_slots[0] == "#") &&
       (middle_slots[1] == "A" || middle_slots[0] == "#") &&
       (middle_slots[2] == "A" || middle_slots[0] == "#") &&
       (bottom_slots[0] == "A" || bottom_slots[0] == "#") &&
       (bottom_slots[1] == "A" || bottom_slots[0] == "#") &&
       (bottom_slots[2] == "A" || bottom_slots[0] == "#")

      add_price_to_game_money(@A9)
      @jackpot = true
      @jackpot_A9 = true

    elsif (upper_slots[0] == "B" || upper_slots[0] == "#") &&
          (upper_slots[1] == "B" || upper_slots[1] == "#") &&
          (upper_slots[2] == "B" || upper_slots[2] == "#") &&
          (middle_slots[0] == "B" || middle_slots[0] == "#") &&
          (middle_slots[1] == "B" || middle_slots[1] == "#") &&
          (middle_slots[2] == "B" || middle_slots[2] == "#") &&
          (bottom_slots[0] == "B" || bottom_slots[0] == "#") &&
          (bottom_slots[1] == "B" || bottom_slots[1] == "#") &&
          (bottom_slots[2] == "B" || bottom_slots[2] == "#")

      add_price_to_game_money(@B9)
      @jackpot = true
      @jackpot_B9 = true

    elsif (upper_slots[0] == "C" || upper_slots[0] == "#") &&
          (upper_slots[1] == "C" || upper_slots[1] == "#") &&
          (upper_slots[2] == "C" || upper_slots[2] == "#") &&
          (middle_slots[0] == "C" || middle_slots[0] == "#") &&
          (middle_slots[1] == "C" || middle_slots[1] == "#") &&
          (middle_slots[2] == "C" || middle_slots[2] == "#") &&
          (bottom_slots[0] == "C" || bottom_slots[0] == "#") &&
          (bottom_slots[1] == "C" || bottom_slots[1] == "#") &&
          (bottom_slots[2] == "C" || bottom_slots[2] == "#")

      add_price_to_game_money(@C9)
      @jackpot = true
      @jackpot_C9 = true

    elsif (middle_slots[0] == "A" || middle_slots[0] == "#") &&
          (middle_slots[1] == "A" || middle_slots[1] == "#") &&
          (middle_slots[2] == "A" || middle_slots[2] == "#")

      add_price_to_game_money(@AAA)

    elsif (middle_slots[0] == "B" || middle_slots[0] == "#") &&
          (middle_slots[1] == "B" || middle_slots[1] == "#") &&
          (middle_slots[2] == "B" || middle_slots[2] == "#")

      add_price_to_game_money(@BBB)

    elsif (middle_slots[0] == "C" || middle_slots[0] == "#") &&
          (middle_slots[1] == "C" || middle_slots[1] == "#") &&
          (middle_slots[2] == "C" || middle_slots[2] == "#")

      add_price_to_game_money(@CCC)

    elsif (middle_slots[0] == "A" || middle_slots[0] == "#") &&
          (middle_slots[1] == "B" || middle_slots[1] == "#") &&
          (middle_slots[2] == "C" || middle_slots[2] == "#")

      add_price_to_game_money(@ABC)

    else
     @winning_text = nil
    end
  end

  def add_price_to_game_money(amount)
    winning_amount = amount * @bet
    @winning_text = "VOITIT " + winning_amount.to_s
    @user.game_money += winning_amount
    @user.save
  end

  def append_slots_to_string(slots_array)
    slots_string = ""
    i = 0
    while i < 3
      slots_string << slots_array[i] + " "
      i += 1
    end
    return slots_string
  end

  def shuffle(slots)
    i = slots.length - 1
    while i > 0
      j = rand(0...slots.length)
      x = slots[i]
      slots[i] = slots[j]
      slots[j] = x

      i -= 1
    end
  end

  def shuffle_action(slots)
    randomized_slots = [
      slots[rand(0...slots.length)],
      slots[rand(0...slots.length)],
      slots[rand(0...slots.length)]
    ]

    return randomized_slots
  end

  def lower_game_money_amount(user, bet)
    user.game_money -= bet
    user.save
  end

  def start_game
    @user = User.find_or_create_by(username: params[:username])
    @game_money = 25
    @current_bet = 1

    @user.game_money = @game_money
    @user.current_bet = @current_bet
    @user.save

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

    # If someone changed username through console do nothing but alert
    if !@user.nil?

      @username = @user.username
      @game_money_amount = @user.game_money || 0

      # Money has run out, don't bother to create HighScore and delete it immediately
      if @game_money_amount > 0
        high_score = HighScore.new
        high_score.username = @username
        high_score.game_score = @game_money_amount
        high_score.save
      end

      # Only 5 High Scores allowed at a time, delete worst if over 5
      if HighScore.any? && HighScore.all.size > 5
        HighScore.all.order("game_score DESC").last.destroy
      end

      # Destroy user, not needed anymore
      @user.destroy
    else
      @user_not_found = true
    end

    respond_to do |format|
      format.js
    end
  end

  def info
    respond_modal_with nil
  end

  def bet_lower
    @user = User.find_by(username: params[:username])

    # If someone changed username through console do nothing but alert
    if !@user.nil?

      @current_bet = @user.current_bet

      if @current_bet > 1 && @current_bet <= 5
        @current_bet -= 1
        @user.current_bet = @current_bet
        @user.save
      end

    else
      @user_not_found = true
    end

    respond_to do |format|
        format.js
      end
  end

  def bet_higher
    @user = User.find_by(username: params[:username])

    # If someone changed username through console do nothing but alert
    if !@user.nil?
      @current_bet = @user.current_bet

      if @current_bet < 5 && @current_bet >= 1 &&
        @current_bet + 1 <= @user.game_money
        @current_bet += 1
        @user.current_bet = @current_bet
        @user.save
      end
    else
      @user_not_found = true
    end

    respond_to do |format|
      format.js
    end
  end

  def chat
    @message = params[:message]
    if @message.length > 0 && @message.length <= 140
      @chat = Chat.new
      @chat.message = @message
      @chat.username = params[:username]
      @chat.save
    end

    # Save only 5 newest messages
    if Chat.count > 5
      Chat.all.order("created_at ASC").first.destroy
    end

    respond_to do |format|
      format.js
    end
  end

  private
    def set_slots
      @slots = [
      "A", "A", "A", "A", "A", "A", "A",
      "B", "B", "B", "B", "B", "B",
      "C", "C", "C", "C", "C",
      "#"
    ]
    end

    def set_winning_prices
      @AAA = 3
      @BBB = 4
      @CCC = 5
      @ABC = 3
      @A9 = 20
      @B9 = 40
      @C9 = 60
    end
end
