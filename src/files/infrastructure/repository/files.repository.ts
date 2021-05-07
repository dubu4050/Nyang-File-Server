import { Files } from 'src/files/domain/entity/files.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Files)
export class FilesRepository extends Repository<Files> {}
