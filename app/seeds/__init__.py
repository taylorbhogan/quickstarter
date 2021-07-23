from flask.cli import AppGroup
from .users import seed_users, undo_users
from .countries import seed_countries, undo_countries
from .categories import seed_categories, undo_categories
from .sub_categories import seed_sub_categories, undo_sub_categories
from .projects import seed_projects, undo_projects
from .rewards import seed_rewards, undo_rewards

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_countries()
    seed_categories()
    seed_sub_categories()
    seed_projects()
    seed_rewards()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_countries()
    undo_categories()
    undo_sub_categories()
    undo_projects()
    undo_rewards()
    # Add other undo functions here
