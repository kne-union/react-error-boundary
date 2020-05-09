# react-error-boundary
用于捕捉react组件错误

```shell script
npm i @kne/react-error-boundary
```

# 使用示例

```jsx
import ErrorBoundary from '@kne/react-error-boundary';

const ErrorComponent = ({error})=>{
  console.error(error);
  return <div>组件发生错误</div>
}

const SomeComponent = ()=>{
  return <ErrorBoundary errorComponent={ErrorComponent}>
    <SomeComponent />
  </ErrorBoundary> 
};

const SomeComponent2 = ()=>{
  return <ErrorBoundary errorRender={(error)=>{
    console.error(error);
    return <div>组件发生错误</div>
  }}>
    <SomeComponent />
  </ErrorBoundary> 
};
```

# API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |
|errorComponent|当子组件发生错误的时候渲染该组件，并传入属性error|Component|- |
|errorRender|当子组件发生错误的时候执行该方法，并传入参数error，需要返回jsx，注意:当errorComponent存在时该方法会被忽略|func|- |
|onError|当子组件发生错误的时候执行该方法|func|- |

# Change Log: