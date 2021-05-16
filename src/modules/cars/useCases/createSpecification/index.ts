import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationService } from "./CreateSpecificationService";

const specificatiosRepository = SpecificationsRepository.getInstance();
const createSpecificationService = new CreateSpecificationService(specificatiosRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationService);

export { createSpecificationController };