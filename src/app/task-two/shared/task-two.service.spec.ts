import { TestBed, inject } from '@angular/core/testing';

import { TaskTwoService } from './task-two.service';

describe('TaskTwoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskTwoService]
    });
  });

  it('should be created', inject([TaskTwoService], (service: TaskTwoService) => {
    expect(service).toBeTruthy();
  }));
});
