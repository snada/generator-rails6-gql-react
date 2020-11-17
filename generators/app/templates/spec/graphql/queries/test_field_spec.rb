# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'TestFieldQuery', type: :graphql do
  let(:query) do
    <<-GRAPHQL
      query test {
        testField
      }
    GRAPHQL
  end

  context 'execution' do
    it 'returns data' do
      expect(<%= appClassName %>Schema.execute(
        query #, context: { current_user: admin }, variables: { id: filter.id }
      ).to_h.deep_symbolize_keys).to eq(
        data: {
          testField: 'Hello World!'
        }
      )      
    end
  end
end