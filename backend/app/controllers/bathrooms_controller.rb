class BathroomsController < ActionController::API
  def index
    @bathrooms = Bathroom.order(:name)
    render json: @bathrooms
  end
  def show
    @bathrooms = Bathroom.find(params[:id])
    render json: {
      bathrooms: @bathrooms,
      reviews: @bathrooms.reviews
    }
     # @review = (:conditions => [":location_id = ?", params[:id]])
    #   render json: @review
  end
end
# :conditions =>
#   ["created_at >= :start_date AND created_at <= :end_date", { :start_date => params[:start_date], :end_date => params[:end_date] }])
