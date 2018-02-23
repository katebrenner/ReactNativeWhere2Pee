class BathroomsController < ActionController::API
  def index
    render json: Bathroom.order(:name)
  end
  def show
    render json: Bathroom.find(params[:id])
  end
end
