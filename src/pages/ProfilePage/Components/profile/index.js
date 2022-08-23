import React from 'react'  
import { useSelector } from 'react-redux';
import { images } from '../../../../assets/';
import { Card, CardHeader, CardHeaderAvatar, CardHeaderInfo, CardHeaderSkills, CardHeaderSkillsAvatar, CardHeaderSkillsInfo, Content, InfoContent, SkillsContent } from './styles';

  
function ProfileMe() {
    const { user } = useSelector(state => state.auth);
    return (
        <Content>
            <SkillsContent>
                <Card>
                    <div className="card_header">
                        <CardHeaderSkills>
                            <CardHeaderSkillsAvatar>
                                <div>
                                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQG7w8pfuyR4Lg/profile-displayphoto-shrink_100_100/0/1572980056108?e=1663804800&v=beta&t=6xAr0JKqumduv0tlePudndvlIUy_j7bM3hpqCnMo28U" alt="avatar" />
                                </div>
                            </CardHeaderSkillsAvatar>
                            <CardHeaderSkillsInfo>
                                <div>
                                    <div>
                                        <span className='number_tracking'>22</span>
                                        <span className='text_tracking'>Creditos</span>
                                    </div>
                                    <div>
                                        <span className='number_tracking'>22</span>
                                        <span className='text_tracking'>Creditos</span>
                                    </div>
                                    <div>
                                        <span className='number_tracking'>22</span>
                                        <span className='text_tracking'>Creditos</span>
                                    </div>
                                </div>
                            </CardHeaderSkillsInfo>
                        </CardHeaderSkills>
                    </div>
                </Card>
            </SkillsContent>
            <InfoContent>
                <Card>
                    <CardHeaderInfo>
                        <div>
                            <h6>Mi cuenta</h6>
                            <button>Editar</button>
                        </div>
                    </CardHeaderInfo>
                </Card>
            </InfoContent>
        </Content>
    )
}

export default ProfileMe;