import Icon from '../../Icon';
import Menu from './Menu';

const WalletList = ({ children, className, onClick }) => (
  <button
    type="button"
    className={`bg-purple rounded-xl text-center text-white body-m py-1 active:bg-dark-purple-2 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const Hero = ({ walletList }) => (
  <div>
    <button
      type="button"
      className="relative shadow-md shadow-grey-4 bg-dark-purple-2 h-36 min-w-full rounded-[50px] flex justify-around items-center active:bg-dark-purple-1 overflow-hidden"
    >
      <p className="body-m text-white z-10 ">Tap to add wallet</p>
      <div className="w-14 h-14 bg-dark-purple-3 rounded-full absolute -top-7 left-4" />
      <div className="w-36 h-36 border-4 border-dark-purple-3 rounded-full absolute -bottom-16 -right-4" />
    </button>
    <div className="grid grid-cols-3 gap-1 pt-2">
      {walletList?.map((e) => (
        <WalletList key={e.id}>{e.name}</WalletList>
      ))}
      {walletList?.length < 6 && (
        <WalletList className="border-2 border-dark-purple-2 ">
          Add Wallet
        </WalletList>
      )}
    </div>
    <div className="flex items-center justify-around pt-3">
      <Menu label="Transfer">
        <Icon.Transfer className="h-8 w-8 stroke-dark-purple-1" />
      </Menu>
      <Menu label="Payment">
        <Icon.Payment className="h-8 w-8 stroke-dark-purple-1" />
      </Menu>
      <Menu label="Payout">
        <Icon.Payout className="h-8 w-8 stroke-dark-purple-1" />
      </Menu>
      <Menu label="Top up">
        <Icon.TopUp className="h-8 w-8 stroke-dark-purple-1" />
      </Menu>
    </div>
  </div>
);

export default Hero;
