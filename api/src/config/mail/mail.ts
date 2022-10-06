interface IMailConfig {
  driver: string;
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'aluiziodeveloper@gmail.com',
      name: 'Jorge Aluizio',
    },
  },
} as IMailConfig;
