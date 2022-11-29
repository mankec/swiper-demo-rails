class PagesController < ApplicationController

  NUMBER_OF_SLIDES = 3
 # NUMBER_OF_UPCOMING_SLIDES = 5

  def index
    @pages = Page.all.limit(5)
  end

  def show
    id = params[:id].to_i
    @pages = Page.all.limit(5)
  end

  def append
    @pages = Page.where("id > #{params[:id]}").limit(5)
    render partial: "page", locals: { pages: @pages }
  end
end