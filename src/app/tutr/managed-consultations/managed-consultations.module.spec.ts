import { ManagedConsultationsModule } from './managed-consultations.module';

describe('ManagedConsultationsModule', () => {
  let managedConsultationsModule: ManagedConsultationsModule;

  beforeEach(() => {
    managedConsultationsModule = new ManagedConsultationsModule();
  });

  it('should create an instance', () => {
    expect(managedConsultationsModule).toBeTruthy();
  });
});
