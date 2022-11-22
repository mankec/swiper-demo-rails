class PagesController < ApplicationController

  NUMBER_OF_SLIDES = 3

  def index
    @pages = Page.all.limit(5)
  end

  def show
    @pages = Page.all.limit(5)
    @value = params[:id]
  end

  def append
    render partial: "page"
  end

  # def page
  #   respond_to do |format|
  #     format.turbo_stream do
  #       render turbo_stream: turbo_stream.append('swiper-slide', partial: 'page', locals: { page: params[:page].to_i })
  #     end
  #   end
  # end

end