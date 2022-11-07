class PagesController < ApplicationController

  def index
    @pages = Page.all
    @page = params[:id].to_i
  end

  def show
    @pages = Page.all
    @page = Page.find(params[:id])
  end

end