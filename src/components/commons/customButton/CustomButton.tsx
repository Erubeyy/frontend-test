import './CustomButton.scss'

type CustomButtonProps = {
  type: 'primary' | 'secondary' | 'tertiary';
  content: string | JSX.Element | [string, JSX.Element];
  action?: () => void;
  circular?: boolean;
}

const CustomButton = ({ type, content, action, circular = false }: CustomButtonProps) => {
  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <>
          {content[0]}
          {content[1]}
        </>
      );
    } else {
      return content;
    }
  };

  return (
    <button
      className={`btn ${type === 'primary' ? 'btn-primary' : type === 'secondary' ? 'btn-secondary' : 'btn-tertiary'} ${circular && 'circular'}`}
      onClick={action}
    >
      {renderContent()}
    </button>)
}

export default CustomButton;