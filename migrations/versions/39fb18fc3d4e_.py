"""empty message

Revision ID: 39fb18fc3d4e
Revises: f6fa22d132e1
Create Date: 2022-10-11 19:04:27.443065

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '39fb18fc3d4e'
down_revision = 'f6fa22d132e1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'is_active')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))
    # ### end Alembic commands ###
