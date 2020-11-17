# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Application', type: :routing do
  it 'routes to root' do
    expect(get: '/').to route_to(controller: 'application', action: 'home')
  end
end
