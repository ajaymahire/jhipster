import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './group.reducer';
import { IGroup } from 'app/shared/model/group.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IGroupDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const GroupDetail = (props: IGroupDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { groupEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="monolitApp.group.detail.title">Group</Translate> [<b>{groupEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="name">
              <Translate contentKey="monolitApp.group.name">Name</Translate>
            </span>
          </dt>
          <dd>{groupEntity.name}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="monolitApp.group.description">Description</Translate>
            </span>
          </dt>
          <dd>{groupEntity.description}</dd>
          <dt>
            <Translate contentKey="monolitApp.group.user">User</Translate>
          </dt>
          <dd>{groupEntity.userLogin ? groupEntity.userLogin : ''}</dd>
        </dl>
        <Button tag={Link} to="/group" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/group/${groupEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ group }: IRootState) => ({
  groupEntity: group.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetail);
