class Map
  def initialize
    @map = Array.new
  end

  def assign(key, value)
    combo_index = @map.index {|combo| combo[0] == key}
    combo_index ? @map[combo_index][1] = value : @map.push([key, value])
    [key, value]
  end

  def lookup(key)
    @map.each do |combo|
      return combo[1] if combo[0] == key}
      nil
    end
  end

  def remove(key)
    @map.reject! {|combo| combo[0] == key}
    nil
  end

  def show
    @map
  end
end
