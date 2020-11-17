module Types
  class QueryType < GraphQL::Schema::Object
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false, description: 'Just an example field'
    def test_field
      "Hello World!"
    end
  end
end
