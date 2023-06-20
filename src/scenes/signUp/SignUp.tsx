import React from 'react'

import { LogoWrap, AccoundWrapper, InsideWrapper, AccountForm, LoginText, InputAccount, Btn, LoginFooter, FooterText, SignUpText, Form } from '../SignIn/styles/signIn'

function SignUp() {
  return (
    <><LogoWrap>


          <svg width="33" height="27" xmlns="http://www.w3.org/2000/svg"><path d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z" fill="#FC4747" /></svg>
      </LogoWrap><AccoundWrapper>
              <InsideWrapper>
                  <AccountForm>
                      <LoginText>Login</LoginText>
                      <Form>
                          <div>
                              <InputAccount placeholder='Email adress' />
                          </div>
                          <div>
                              <InputAccount placeholder='Password' />
                          </div>
                          <div>
                              <InputAccount placeholder='Reapeat password' />
                          </div>

                          <Btn>
                             sign up 
                          </Btn>
                      </Form>
                      <LoginFooter>
                          <FooterText>Don’t have an account? <SignUpText>Sign Up</SignUpText></FooterText>
                      </LoginFooter>
                  </AccountForm>
              </InsideWrapper>
          </AccoundWrapper></>
  )
}

export default SignUp