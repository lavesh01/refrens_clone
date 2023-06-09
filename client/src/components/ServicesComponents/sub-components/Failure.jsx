import { Button, Result, Typography } from 'antd';

import { Link } from 'react-router-dom';

const { Paragraph, Text } = Typography;

const Failure = () => (
  <Result
    status="error"
    title="Submission Failed"
    subTitle="Please check and modify the information before resubmitting."
    extra={[
        <Link to="/">
      <Button type="primary" key="console">
        Go To Home
      </Button>
        </Link>
        ,
        <Link to="/create-service">
      <Button key="buy">Try Again</Button>,
        </Link>
    ]}
  >
    <div className="desc">
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          <span style={{color:"red"}}>*</span> are required fields. Don't forget to fill them up.
        </Text>
      </Paragraph>
      {/* <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account has been
        frozen. <a>Thaw immediately &gt;</a>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account is not yet
        eligible to apply. <a>Apply Unlock &gt;</a>
      </Paragraph> */}
    </div>
  </Result>
);

export default Failure;