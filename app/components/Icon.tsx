interface IconProps {
  type: string
  className?: string
}

const Icon = ({ type, className }: IconProps) => {
  if (type === 'pixel') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g clipPath="url(#clip0_123_485)">
          <path
            d="M23.0509 8.78906V8.07633V7.36361H22.3381V6.65088H21.6254V5.93814V5.22543H20.9127V4.51269H20.2H19.4872V3.79998V3.08725H18.7745V2.37451H18.0618H17.3491V1.6618H16.6363V0.949063H15.92H15.2072H14.4945V0.236328H13.7818H13.069H12.3563H11.6436H10.9309H10.2181H9.50541V0.949063H8.79268H8.07994H7.36359V1.6618H6.65086V2.37451H5.93814H5.22541V3.08725H4.51267V3.79998V4.51269H3.79996H3.08722V5.22543H2.37451V5.93814V6.65088H1.66178V7.36361H0.949041V8.07633V8.78906V9.50541H0.236328V10.2181V10.9309V11.6436V12.3563V13.0691V13.7818V14.4945H0.949041V15.2073V15.92V16.6327H1.66178V17.3454H2.37451V18.0618V18.7745H3.08722V19.4872H3.79996H4.51267V20.2V20.9127H5.22541V21.6254H5.93814H6.65086V22.3382H7.36359V23.0509H8.07994H8.79268H9.50541V23.7636H10.2181H10.9309H11.6436H12.3563H13.069H13.7818H14.4945V23.0509H15.2072H15.92H16.6363V22.3382H17.3491V21.6254H18.0618H18.7745V20.9127H19.4872V20.2V19.4872H20.2H20.9127V18.7745H21.6254V18.0618V17.3454H22.3381V16.6327H23.0509V15.92V15.2073V14.4945H23.7636V13.7818V13.0691V12.3563V11.6436V10.9309V10.2181V9.50541H23.0509V8.78906ZM18.7745 5.22543V5.93814H19.4872H20.2V6.65088H20.9127V7.36361V8.07633H21.6254V8.78906V9.50541V10.2181H20.9127V9.50541V8.78906V8.07633H20.2V7.36361V6.65088H19.4872H18.7745V5.93814H18.0618V5.22543V4.51269H17.3491H16.6363V3.79998H15.92V3.08725H15.2072H14.4945V2.37451H15.2072H15.92V3.08725H16.6363V3.79998H17.3491H18.0618V4.51269H18.7745V5.22543Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_123_485">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  if (type === 'pixel-heart') {
    return (
      <svg
        width="24"
        height="21"
        viewBox="0 0 24 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g clipPath="url(#clip0_123_489)">
          <path
            d="M3.46767 3.5323V0.120789H10.3024V3.51211H13.7183V0.123715H20.5671V3.5244H23.9771V10.3609H20.5803V13.7853H17.1512V17.2097H13.7338V20.6177H10.3159V17.2208H6.89264V13.7914H3.46825V10.3743H0.0605469V3.5282H3.47177C3.46738 3.55623 3.46445 3.58446 3.46299 3.61279C3.46299 4.68986 3.46299 5.76693 3.46299 6.84401C3.46473 6.87841 3.46825 6.9127 3.47352 6.94674H6.88181V3.52235C6.37811 3.52235 5.88845 3.52235 5.39879 3.52235C4.75528 3.52469 4.11157 3.52801 3.46767 3.5323Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_123_489">
            <rect width="24" height="20.7805" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  if (type === 'pen') {
    return (
      <svg
        width="14"
        height="28"
        viewBox="0 0 14 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g clipPath="url(#clip0_123_491)">
          <path
            d="M2.02631 14.8548V16.6969H0.184204V14.8548V13.0127V11.1706H2.02631V13.0127V14.8548ZM3.86841 9.32845V7.48634H2.02631V9.32845V11.1706H3.86841V9.32845ZM5.71052 5.64424V3.80213H3.86841V5.64424V7.48634H5.71052V5.64424ZM7.55263 7.48634H9.39473V5.64424V3.80213H7.55263V5.64424V7.48634ZM9.39473 11.1706H11.2368V9.32845V7.48634H9.39473V9.32845V11.1706ZM11.2368 11.1706V13.0127V14.8548V16.6969H13.0789V14.8548V13.0127V11.1706H11.2368ZM9.39473 18.539H7.55263H5.71052H3.86841V16.6969H2.02631V18.539H0.184204V20.3811H2.02631V22.2232V24.0653V25.9074V27.7495H3.86841H5.71052H7.55263H9.39473H11.2368V25.9074V24.0653V22.2232V20.3811H13.0789V18.539H11.2368V16.6969H9.39473V18.539ZM7.55263 1.96003V0.11792H5.71052V1.96003V3.80213H7.55263V1.96003ZM5.71052 14.8548H7.55263V13.0127H5.71052V14.8548ZM5.71052 9.32845V11.1706H7.55263V9.32845V7.48634H5.71052V9.32845Z"
            fill="#1D1D1B"
          />
        </g>
        <defs>
          <clipPath id="clip0_123_491">
            <rect width="13.2632" height="28" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  if (type === 'christmas') {
    return (
      <svg
        width="20"
        height="29"
        viewBox="0 0 20 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g clip-path="url(#clip0_123_495)">
          <path
            d="M10.8929 23.2142H19.8214V21.4285H18.0357V19.6428H16.25V17.8571H14.4643V16.0714H12.6786V14.2857H18.0357V12.4999H16.25V10.7142H14.4643V8.92851H12.6786V7.1428H16.25V5.35708H14.4643V3.57137H12.6786V1.78565H10.8929V-6.10352e-05H9.10716V1.78565H7.32145V3.57137H5.53573V5.35708H3.75002V7.1428H7.32145V8.92851H5.53573V10.7142H3.75002V12.4999H1.9643V14.2857H7.32145V16.0714H5.53573V17.8571H3.75002V19.6428H1.9643V21.4285H0.178589V23.2142H9.10716V28.5714H10.8929V23.2142Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_123_495">
            <rect width="20" height="28.5714" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  if (type === 'book') {
    return (
      <svg
        width="24"
        height="17"
        viewBox="0 0 24 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M4.23524 2.88239H2.82349V4.29414H4.23524V2.88239Z"
          fill="black"
        />
        <path
          d="M9.88222 2.88239H5.64697V4.29414H9.88222V2.88239Z"
          fill="black"
        />
        <path d="M11.294 4.29439H9.8822V5.70589H11.294V4.29439Z" fill="black" />
        <path
          d="M9.88224 5.70589H2.82349V7.11764H9.88224V5.70589Z"
          fill="black"
        />
        <path d="M11.294 7.11789H9.8822V8.52939H11.294V7.11789Z" fill="black" />
        <path
          d="M9.88224 8.52939H2.82349V9.94114H9.88224V8.52939Z"
          fill="black"
        />
        <path d="M11.294 9.94138H9.8822V11.3531H11.294V9.94138Z" fill="black" />
        <path
          d="M12.7057 1.47089H11.2942V2.88239H12.7057V1.47089Z"
          fill="black"
        />
        <path
          d="M12.7058 0.0588837V1.47088H22.5885V11.3531H15.5292V12.7649H12.7058V14.1766H11.2942V12.7649H8.47075V11.3531H1.4115V1.47088H11.2942V0.0588837H0V15.5884H9.88225V17.0001H14.1178V15.5884H24V0.0588837H12.7058Z"
          fill="black"
        />
        <path
          d="M21.1765 2.88239H14.1178V4.29414H21.1765V2.88239Z"
          fill="black"
        />
        <path
          d="M14.1176 4.29439H12.7058V5.70589H14.1176V4.29439Z"
          fill="black"
        />
        <path
          d="M21.1765 5.70589H14.1178V7.11764H21.1765V5.70589Z"
          fill="black"
        />
        <path
          d="M14.1176 7.11789H12.7058V8.52939H14.1176V7.11789Z"
          fill="black"
        />
        <path
          d="M21.1765 8.52939H14.1178V9.94114H21.1765V8.52939Z"
          fill="black"
        />
        <path
          d="M14.1176 9.94138H12.7058V11.3531H14.1176V9.94138Z"
          fill="black"
        />
      </svg>
    )
  }

  if (type === 'butterfly') {
    return (
      <svg
        width="24"
        height="18"
        viewBox="0 0 24 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g clip-path="url(#clip0_123_502)">
          <path
            d="M10.3125 2.27176H9.19177V3.39226H10.3125V2.27176Z"
            fill="black"
          />
          <path
            d="M9.19154 1.151H8.07104V2.27175H9.19154V1.151Z"
            fill="black"
          />
          <path
            d="M8.07094 0.0304871H6.95044V1.15099H8.07094V0.0304871Z"
            fill="black"
          />
          <path
            d="M14.8085 2.27176H13.6877V3.39226H14.8085V2.27176Z"
            fill="black"
          />
          <path d="M15.929 1.151H14.8085V2.27175H15.929V1.151Z" fill="black" />
          <path
            d="M17.0497 0.0304871H15.9292V1.15099H17.0497V0.0304871Z"
            fill="black"
          />
          <path
            d="M22.6552 1.151H21.5345H20.4142H19.2937H18.1732V2.27175H17.0502V3.39225H15.9297V4.513H14.8092V5.636H13.6885V4.51775V3.39725H12.5635V3.39475H11.4375V3.39225H10.3125V4.513V5.636H9.19174V4.513H8.07124V3.39225H6.95074V2.27175H5.82749V1.151H4.70699H3.58649H2.46599H1.34499H0.224243V2.27175V3.39225V4.513V5.636V6.7565V7.877H1.34499V8.9975H2.46574V10.123H3.58624V11.2435H2.46574H1.34499V12.3643V13.4845V14.6075H2.46574V15.7278V16.8483H3.58624V17.969H4.70674H5.82724H6.95024H8.07074V16.8483H9.19124V15.7278H10.312V16.8483H11.437V16.851H12.5622V16.8535H13.6872V15.733V15.7278H14.808V16.8483H15.9285V17.969H17.049H18.172H19.2925H20.413V16.8483H21.5332V15.7278V14.6075H22.654V13.4845V12.3643V11.2435H21.5332H20.413V10.123H21.5332V8.9975H22.654V7.877H23.7745V6.7565V5.636V4.513V3.39225V2.27175V1.151H22.6552ZM12.5627 4.51775V5.64075V6.76125V7.882V9.0025V10.128V11.2485V12.3688V13.4893V14.6123V15.7308H11.4375V15.728V14.6078V13.4848V12.3645V11.2438V10.1233V8.9975V7.877V6.7565V5.636V4.5155H12.5627V4.51775Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_123_502">
            <rect width="24" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  if (type === 'cloud') {
    return (
      <svg
        width="24"
        height="16"
        viewBox="0 0 24 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g clip-path="url(#clip0_123_498)">
          <path
            d="M22.8 8.4V7.2H21.6V6H19.2V3.6H18V2.4H16.8V1.2H15.6V0H9.6V1.2H7.2V2.4H6V3.6H4.8V6H2.4V7.2H1.2V8.4H0V13.2H1.2V14.4H2.4V15.6H21.6V14.4H22.8V13.2H24V8.4H22.8ZM10.8 12H9.6V10.8H8.4V12H7.2V10.8H8.4V9.6H9.6V10.8H10.8V12ZM15.6 7.2H14.4V6H13.2V7.2H12V6H13.2V4.8H14.4V6H15.6V7.2Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_123_498">
            <rect width="24" height="15.6" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  if (type === 'web') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g clip-path="url(#clip0_123_510)">
          <path
            d="M23.173 9.10435V6.62087H22.3461V4.95652H21.5165V4.13739H20.6896V3.31043H19.8626V2.48348H19.0435V1.65391H17.3791V0.826957H14.8957V0H10.7583V0.826957H8.27478V1.65391H9.9313V3.31043H9.10435V4.95652H8.27478V7.44H7.44783V8.26696H5.79391V7.44783H3.31043V5.79391H4.13739V4.95652H4.95652V4.13739H5.78609V3.31043H7.44V2.48348H8.26696V1.65391H6.62087V2.48348H4.95652V3.31043H4.13739V4.13739H3.31043V4.95652H2.48348V6.61304H1.65391V8.26696H0.826957V9.92348H0V14.0687H0.826957V16.5522H1.65391V18.2061H2.48348V19.8626H3.31043V20.6896H4.13739V21.5165H4.95652V22.3461H5.78609V23.173H8.26696V24H16.5522V23.173H18.2061V22.3461H19.0435V21.5165H20.6974V20.6896H21.5243V19.8626H22.3539V19.0435H23.1809V16.5522H24V9.10435H23.173ZM9.10435 6.62087V5.79391H9.9313V4.13739H10.7583V2.48348H11.5852V1.65391H13.2417V3.31043H14.0687V4.13739H14.8957V5.79391H15.7252V3.31043H14.8957V2.48348H14.0687V1.65391H16.5522V2.48348H18.2061V3.31043H19.0435V4.13739H19.8704V4.95652H20.6974V5.78609H21.5243V6.61304H20.6896V7.44H17.3791V8.26696H16.5522V5.79391H15.7252V8.27478H9.10435V6.62087ZM15.7252 9.9313V11.5852H8.27478V9.10435H15.7252V9.9313ZM15.7252 13.2417V15.7252H12.4148V14.8957H8.27478V12.4148H15.7252V13.2417ZM0.826957 10.7583H1.65391V9.10435H2.48348V8.27478H4.95652V9.10435H7.44V11.5852H0.826957V10.7583ZM1.65391 15.7148V13.2417H0.826957V12.4148H7.44783V15.7252H3.31043V16.5522H2.48348V15.7252L1.65391 15.7148ZM9.10435 23.173V22.3461H6.62087V21.5165H5.79391V20.6896H4.95652V19.8626H4.13739V19.0435H3.31043V17.3791H4.13739V16.5522H8.27478V19.8626H9.10435V21.5165H9.9313V23.173H9.10435ZM12.4148 23.173H11.5852V22.3461H10.7583V20.6896H9.9313V19.0435H9.10435V15.7252H11.5852V16.5522H14.8957V19.8626H14.0687V21.5165H13.2417V23.173H12.4148ZM20.6896 19.0435V19.8704H19.8626V20.6974H18.2061V21.5243H17.3791V22.3539H15.7252V23.1809H14.0687V22.3461H14.8957V20.6896H15.7252V17.3791H16.5522V16.5522H18.2061V17.3791H20.6896V18.2061H21.5165V19.0435H20.6896ZM23.173 13.2496V15.733H22.3461V17.387H21.5165V16.5522H19.0435V15.7252H16.5522V12.4148H23.173V13.2496ZM23.173 10.7661V11.593H17.3791V10.7583H16.5522V9.10435H18.2061V8.27478H21.5165V7.44783H22.3461V9.9313H23.173V10.7661Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_123_510">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }
}

export default Icon