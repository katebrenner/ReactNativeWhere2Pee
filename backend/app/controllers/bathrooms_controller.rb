class BathroomsController < ActionController::API
  def index
    @bathrooms = Bathroom.order(:name)
    render json: @bathrooms
  end
end
