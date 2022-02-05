# This Makefile is an easy way to run common operations.
# Execute commands like this:
# * make
# * make deploy

.PHONY: default
default: run

################################################################################
# Dependency management
################################################################################

# Run website locally.
.PHONY: run
run:
	yarn start

# Update Go dependencies.
.PHONY: deploy
deploy:
	yarn build
	USE_SSH=true yarn deploy