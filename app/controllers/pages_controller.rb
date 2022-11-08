class PagesController < ApplicationController

  def index
    @pages = Page.all
  end

  def show
    @pages = Page.all
    @page = Page.find(params[:id])
  end

  def page
    respond_to do |format|
      format.turbo_stream do
        render turbo_stream: turbo_stream.append('elements', partial: 'page', locals: { page: params[:id] })
      end
    end
  end
end