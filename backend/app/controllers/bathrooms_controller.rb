class BathroomsController < ActionController::API
  def index
    @bathrooms = Bathroom.all
    render json: @bathrooms
  end
end
