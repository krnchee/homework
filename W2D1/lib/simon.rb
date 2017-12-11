class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :seq_len, :over, :seq

  def initialize
    @seq_len = 1
    @over = false
    @seq = []
  end

  def play
    until @over
      take_turn
      system("clear")
    end

    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence

    unless @over
      round_success_message
      @seq_len += 1
    end
  end

  def show_sequence
    add_random_color
    @seq.each do |color|
      puts color
      sleep 2
      system("clear")
      sleep 0.5
    end
  end

  def require_sequence
    puts "Enter the sequence."
    @seq.each do |color|
      user_color = gets.chomp
      if color[0] != user_color
        @over = true
        break
      end
    end
    sleep 0.25
  end

  def add_random_color
    @seq << COLORS.shuffle[0]
  end

  def round_success_message
    "Round won. Heres the next part:"
  end

  def game_over_message
    puts "Game over! You made it #{@seq_len - 1} rounds."
  end

  def reset_game
    @seq_len = 1
    @over = false
    @seq = []
  end
end
