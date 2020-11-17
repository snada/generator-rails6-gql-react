# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'BillingInfoSave', type: :graphql do
  let(:user) { FactoryBot.create(:user) }

  let(:mutation) do
    <<-GRAPHQL
      mutation addition($first: Float!, $second: Float!) {
        testMutation(numbers:{ first: $first, second: $second }) {
          result {
            addition
          }
        }
      }
    GRAPHQL
  end

  context 'execution' do
    it 'returns the addition' do
      expect(<%= appClassName %>Schema.execute(mutation, variables: { first: 1, second: 2 }).to_h.deep_symbolize_keys).to eq(
        data: {
          testMutation: {
            result: {
              addition: 3.0
            }
          }
        }
      )
    end
  end
end
