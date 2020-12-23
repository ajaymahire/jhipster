import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';
import { Translate, translate } from 'react-jhipster';
import { IRootState } from 'app/shared/reducers';
import { login } from 'app/shared/reducers/authentication';
import { Row, Col, Label, Alert, Button } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';

export interface ILoginProps extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export const Home = (props: ILoginProps) => {
  const handleLogin = (event, form, values) => {
    props.login(values.username, values.password, values.rememberMe);
  }

  const { location, isAuthenticated } = props;
  const { from } = (location.state as any) || { from: { pathname: '/', search: location.search } };
  if (isAuthenticated) {
    return <Redirect to={from} />;
  }
  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h1 id="login-title">
            <Translate contentKey="login.title">Sign in</Translate>
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          <AvForm onSubmit={handleLogin}>
            <Row>
              <Col md="12">
                {props.loginError ? (
                  <Alert color="danger">
                    <Translate contentKey="login.messages.error.authentication">
                      <strong>Failed to sign in!</strong> Please check your credentials and try again.
                    </Translate>
                  </Alert>
                ) : null}
              </Col>
              <Col md="12">
                <AvField
                  name="username"
                  label={translate('global.form.username.label')}
                  placeholder={translate('global.form.username.placeholder')}
                  required
                  errorMessage="Username cannot be empty!"
                  autoFocus
                />
                <AvField
                  name="password"
                  type="password"
                  label={translate('login.form.password')}
                  placeholder={translate('login.form.password.placeholder')}
                  required
                  errorMessage="Password cannot be empty!"
                />
                <AvGroup check inline>
                  <Label className="form-check-label">
                    <AvInput type="checkbox" name="rememberMe" /> <Translate contentKey="login.form.rememberme">Remember me</Translate>
                  </Label>
                </AvGroup>
              </Col>
              <Col>
                <Button id="login-submit" color="primary" type="submit">
                  <Translate contentKey="login.form.button">Sign in</Translate>
                </Button>
              </Col>
            </Row>
            <div className="mt-1">&nbsp;</div>
            <Alert color="warning">
              <Link to="/account/reset/request">
                <Translate contentKey="login.password.forgot">Did you forget your password?</Translate>
              </Link>
            </Alert>
            <Alert color="warning">
              <span>
                <Translate contentKey="global.messages.info.register.noaccount">You don&apos;t have an account yet?</Translate>
              </span>{' '}
              <Link to="/account/register">
                <Translate contentKey="global.messages.info.register.link">Register a new account</Translate>
              </Link>
            </Alert>
        </AvForm>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ authentication }: IRootState) => ({
  isAuthenticated: authentication.isAuthenticated,
  loginError: authentication.loginError
});

const mapDispatchToProps = { login };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
