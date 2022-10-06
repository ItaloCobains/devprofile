import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import DiskStorageProvider from '@shared/providers/StorageProvider/DiskStorageProvider';
import { IUpdateUserAvatar } from '../domain/models/IUpdateUserAvatar';
import { IUser } from '../domain/models/IUser';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    user_id,
    avatarFilename,
  }: IUpdateUserAvatar): Promise<IUser> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found.');
    }

    const diskProvider = new DiskStorageProvider();
    if (user.avatar) {
      await diskProvider.deleteFile(user.avatar);
    }
    user.avatar = await diskProvider.saveFile(avatarFilename);

    await this.usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
