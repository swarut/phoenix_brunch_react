# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :phoenix_brunch_react,
  ecto_repos: [PhoenixBrunchReact.Repo]

# Configures the endpoint
config :phoenix_brunch_react, PhoenixBrunchReact.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "k2wjqMNiKrc+9JB6sZDtjCfx3tXkAcbXsHLmo3IQ6PrVvdqZv/E8Eroz+5sbLXdS",
  render_errors: [view: PhoenixBrunchReact.ErrorView, accepts: ~w(html json)],
  pubsub: [name: PhoenixBrunchReact.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
